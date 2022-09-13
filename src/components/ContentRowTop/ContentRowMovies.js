import React from "react";
import Metric from "./Metric";
import propTypes from "prop-types"

const ContentRowMovies = (props) => {
    const data = [
        {
            color: 'primary',
            title: 'Movies in Data Base',
            value: 21,
            icon: 'fa-film'
        },
        {
            color: 'success',
            title: 'Total awards',
            value: 79,
            icon: 'fa-award'
        },
        {
            color: 'warning',
            title: 'Actors quantity',
            value: 49,
            icon: 'fa-user'
        }
    ]
  return (
    <div className="row">
      {data.map(({color, title, value, icon}, i) => <Metric color={color} title={title} value={value} icon={icon}key={title + i} />)}
      
         
    </div>
  );
};


Metric.propTypes = {
    color : propTypes.string,
    title : propTypes.string,
    value : propTypes.number,
    icon : propTypes.string
}
export default ContentRowMovies;
