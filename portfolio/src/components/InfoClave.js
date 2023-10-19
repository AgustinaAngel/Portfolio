import React from 'react';
import '../App.css';

function InfoClave({ info1, info2, info3 }) {
  return (
   <>
   <div className="badge bg-gradient-primary-to-secondary text-white mb-4">
                <div className="text-uppercase">{info1} &middot; {info2} &middot; {info3}</div>
              </div>
   </>
  );
}

export default InfoClave;
