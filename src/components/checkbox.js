import React from 'react';

const Checkbox=(props)=> {

    return (
        <div>
            <label className="checkbox-inline">
                <input 
                    type="checkbox" 
                    checked={props.isChecked}
                    onChange={event =>{props.onCheck(event.target.checked)}}
                />
                <span>Only show Products in Stock</span>
            </label>
        </div>    
    ) 
    
  }

  export default Checkbox;