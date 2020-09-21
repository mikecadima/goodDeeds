import React, {Fragment} from 'react';

const FileUpload = () =>{
    return (
        <Fragment>
            <form>
                <div className="file">
                    <label className="file-label">
                        <input class="file-input" type="file" name="resume"/>
                        <span class="file-cta">
                        <span class="file-icon">
                            <i class="fas fa-upload"></i>
                        </span>
                        <span class="file-label">
                            Choose a file…
                        </span>
                        </span>
                    </label>
                </div>
                <input type="submit" value="Upload" classname="btn btn-primary"></input>
            </form>
        </Fragment>
    )
}

export default FileUpload;