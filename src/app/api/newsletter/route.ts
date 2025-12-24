import { NextRequest, NextResponse } from 'next/server';

// ActiveCampaign API configuration
const AC_API_URL = process.env.ACTIVECAMPAIGN_API_URL;
const AC_API_KEY = process.env.ACTIVECAMPAIGN_API_KEY;

// List IDs for different languages
const AC_LIST_ID_EN = '38';
const AC_LIST_ID_NL = '39';

export async function POST(request: NextRequest) {
  console.log('Newsletter API called');
  
  try {
    const body = await request.json();
    const { email, name, locale } = body;

    console.log('Newsletter subscription request:', { email, name, locale });

    // Validate required fields
    if (!email || !name || !locale) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Email, name, and locale are required' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!AC_API_URL || !AC_API_KEY) {
      console.error('ActiveCampaign API credentials not configured');
      console.error('AC_API_URL:', AC_API_URL ? 'Set' : 'Not set');
      console.error('AC_API_KEY:', AC_API_KEY ? 'Set' : 'Not set');
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      );
    }

    // Determine which list to subscribe to based on locale
    const listId = locale === 'nl' ? AC_LIST_ID_NL : AC_LIST_ID_EN;

    if (!listId) {
      console.error(`List ID not configured for locale: ${locale}`);
      console.error('AC_LIST_ID_EN:', AC_LIST_ID_EN ? 'Set' : 'Not set');
      console.error('AC_LIST_ID_NL:', AC_LIST_ID_NL ? 'Set' : 'Not set');
      return NextResponse.json(
        { error: 'Newsletter list not configured for this language' },
        { status: 500 }
      );
    }

    console.log('Using list ID:', listId, 'for locale:', locale);

    // Split name into first and last name
    const nameParts = name.trim().split(' ');
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';

    // Create or update contact in ActiveCampaign
    const contactData = {
      contact: {
        email: email,
        firstName: firstName,
        lastName: lastName,
      },
    };

    console.log('Creating/updating contact in ActiveCampaign...');

    // Step 1: Create or update contact
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
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      );
    }

    const contactResult = await contactResponse.json();
    const contactId = contactResult.contact.id;

    console.log('Contact created/updated with ID:', contactId);

    // Step 2: Add contact to the appropriate list
    const listData = {
      contactList: {
        list: listId,
        contact: contactId,
        status: 1, // 1 = subscribed, 2 = unsubscribed
      },
    };

    console.log('Adding contact to list...');

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
      return NextResponse.json(
        { error: 'Failed to add to newsletter list' },
        { status: 500 }
      );
    }

    console.log('Successfully subscribed to newsletter');

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}
