import React from 'react'

const SelectInput = ({ name, label, onChange, defaultOption, value, error, options }) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <select name={name} value={value} onChange={onChange} className="form-control">
                <option value="">
                    {defaultOption}
                </option>
                {
                    options.map(o=>{
                        return (
                            <option key={o.value} value={o.value}>
                                {o.text}
                            </option>
                        )
                    })
                }
            </select>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default SelectInput