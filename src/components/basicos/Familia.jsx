import React from 'react';


export default function Familia(props) {
    return (
        <div>
            {
                React.Children.map(props.children, (el) => {
                    return React.cloneElement(el, props)
                })
            }
           
            
        </div>
    )
}