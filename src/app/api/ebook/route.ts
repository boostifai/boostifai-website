import { NextRequest, NextResponse } from 'next/server';

// ActiveCampaign API configuration
const AC_API_URL = process.env.ACTIVECAMPAIGN_API_URL;
const AC_API_KEY = process.env.ACTIVECAMPAIGN_API_KEY;

export async function POST(request: NextRequest) {
  console.log('Ebook API called');

  try {
    const body = await request.json();
    const { email, name, website, locale, listId } = body;

    console.log('Ebook download request:', { email, name, website, locale, listId });

    // Validate required fields
    if (!email || !name || !website || !locale || !listId) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Email, name, website, locale, and listId are required' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!AC_API_URL || !AC_API_KEY) {
      console.error('ActiveCampaign API credentials not configured');
      console.error('AC_API_URL:', AC_API_URL ? 'Set' : 'Not set');
      console.error('AC_API_KEY:', AC_API_KEY ? 'Set' : 'Not set');
      return NextResponse.json({ error: 'Ebook service not configured' }, { status: 500 });
    }

    console.log('Using list ID:', listId);

    // Split name into first and last name
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Determine language value based on locale
    const languageValue = locale === 'nl' ? 'Dutch' : 'English';

    // Create or update contact in ActiveCampaign with custom fields
    const contactData = {
      contact: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        fieldValues: [
          {
            field: '2', // Website URL field
            value: website,
          },
          {
            field: '15', // Language field
            value: languageValue,
          },
        ],
      },
    };

    console.log('Creating/updating contact in ActiveCampaign with language:', languageValue);

    // Step 1: Create or update contact with custom fields
    const contactResponse = await fetch(`${AC_API_URL}/api/3/contact/sync`, {
      method: 'POST',
      headers: {
        'Api-Token': AC_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    if (!contactResponse.ok) {
      const errorText = await contactResponse.text();
      console.error('ActiveCampaign contact sync error:', contactResponse.status, errorText);
      return NextResponse.json({ error: 'Failed to process ebook request' }, { status: 500 });
    }

    const contactResult = await contactResponse.json();
    const contactId = contactResult.contact.id;

    console.log('Contact created/updated with ID:', contactId);

    // Step 2: Add contact to the specified list
    const listData = {
      contactList: {
        list: listId.toString(),
        contact: contactId,
        status: 1, // 1 = subscribed
      },
    };

    console.log('Adding contact to list:', listId);

    const listResponse = await fetch(`${AC_API_URL}/api/3/contactLists`, {
      method: 'POST',
      headers: {
        'Api-Token': AC_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listData),
    });

    if (!listResponse.ok) {
      const errorText = await listResponse.text();
      console.error('ActiveCampaign list subscription error:', listResponse.status, errorText);
      // Don't fail if already subscribed
      if (!errorText.includes('already exists')) {
        return NextResponse.json({ error: 'Failed to add to ebook list' }, { status: 500 });
      }
    }

    console.log('Successfully added to ebook list');

    return NextResponse.json({
      success: true,
      message: 'Successfully requested ebook download',
    });
  } catch (error) {
    console.error('Ebook download error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
