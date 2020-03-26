import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHubData } from "../hooks";

const SearchMenu = ({ user }) => {
    const { onGet, onClear } = useHubData();
    console.log(user);
    let _input;

    useEffect(() => {
        onGet("successful-lad");
    }, [onGet]);

    return (
        <div className="container">
            <h5>Getting Git repos by username</h5>
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={() => onGet(_input.value)}
                            >
                                Get repos
                            </button>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="enter git name"
                            aria-label=""
                            aria-describedby="basic-addon1"
                            defaultValue={user}
                            ref={node => (_input = node)}
                        />
                    </div>
                </div>
                <div className="col">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => onClear()}
                    >
                        Clear repos
                    </button>
                </div>
            </div>
        </div>
    );
};

SearchMenu.propTypes = {
    user: PropTypes.string
};

export default SearchMenu;
