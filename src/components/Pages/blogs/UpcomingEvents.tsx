import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
  return (
    <>
      <section>
        <div></div>
        <div>
          <div role="tablist" className="tabs tabs-boxed">
            <Link role="tab" className="tab">
              Tab 1
            </Link>
            <Link role="tab" className="tab tab-active">
              Tab 2
            </Link>
            <Link role="tab" className="tab">
              Tab 3
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpcomingEvents;
