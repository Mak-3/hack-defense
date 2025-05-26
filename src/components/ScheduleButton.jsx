import React from 'react';

const ScheduleButton = () => {
  const handleClick = () => {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/hackdefense?hide_landing_page_details=1&hide_gdpr_banner=1'
    });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 px-4 rounded transition duration-300"
    >
      Schedule Free Consultation
    </button>
  );
};

export default ScheduleButton;