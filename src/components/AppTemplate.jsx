import React from 'react';
//import './AppTemplate.css';
import './AppTemplate.scss';


const AppTemplate = ({container, layout}) => {

  return (
    <div className="app-template">
      <div className={layout}>
        {container}
      </div>
    </div>
  );
};

export default AppTemplate;