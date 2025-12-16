'use client';

import RevealAnimation from '../animation/RevealAnimation';

const BookingWidget = () => {
  return (
    <section className="pb-16 md:pb-50 lg:pb-[100px]">
      <div className="main-container">
        <RevealAnimation delay={0.3}>
          <div className="max-w-full mx-auto">
            <div className="bg-white dark:bg-background-6 rounded-[20px] p-4 md:p-8 overflow-hidden">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/00xxAwKEDhSxQmJ7rBEX"
                style={{
                  width: '100%',
                  border: 'none',
                  overflow: 'auto',
                  height: '787px',
                }}
                scrolling="yes"
                id="booking-widget"
                title="Book a Meeting"
                className="rounded-lg"
              />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

BookingWidget.displayName = 'BookingWidget';
export default BookingWidget;
