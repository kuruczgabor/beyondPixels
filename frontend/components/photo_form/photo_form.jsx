import React from 'react';
import { Redirect } from 'react-router-dom';

class PhotoForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = this.props.photo
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    };

    componentDidMount() {
        this.props.resetPhotoErrors();
    }

    handleFile(e) {
        this.props.resetPhotoErrors();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        };
    };

    handleSubmit(e) {

        e.preventDefault();
        const formData = new FormData();
        
        formData.append('photo[title]', this.state.title);
        formData.append('photo[description]', this.state.description);
        formData.append('photo[author_id]', this.props.currentUserId);
        formData.append('photo[photo_file]', this.state.photoFile);

        this.props.formType === "Edit" ? formData.append('id', this.state.id) : null

        this.props.formType === 'Upload' ? this.props.uploadPhoto(formData) : this.props.updatePhoto(formData)
        this.props.history.push(`/users/${this.props.currentUserId}`)
        
    };

    update(field){
        return e => this.setState({[field]: e.target.value});
    };

    titleChooser() {
        if (this.props.formType === 'Upload') {
            return <h2 className="photo-form-title">Upload</h2>
        } else {
            return <h2 className="photo-form-title">Edit</h2>
        }
    };

    fileChooser() {
        if (this.props.formType === 'Upload') {
            return (
                <label className="choose-a-file" htmlFor="select-file">Choose a file</label>
            )
        } else {
            return (
                ""
            )
        }    
    }

    submitButton() {
        if (this.props.formType === 'Upload') {
            return (
                <input id="photo-upload-button" type="submit" value="Upload" />
            )
        } else {
            return (
                <input id="photo-upload-button" type="submit" value="Save Changes" />
            )
        }            
    }

    deleteButton() {
        if (this.props.formType === 'Upload') {
            return (
                <p/>
            )
        } else {
            return (                
                <input 
                    id="photo-delete-button" 
                    value="Delete Photo" 
                    onClick={() => this.props.deletePhoto(this.props.photo.id)
                        .then( () => this.props.history.push(`/users/${this.props.currentUserId}`))} type="button"
                />
            )
        }             
    }

    renderErrors() {
        return this.props.errors.length > 0 ? (
            <div className="error-popup">
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`error-${i}`}>{error}</li>
                    ))}
                </ul>
            </div>
        ) : null
    }

    render() {
        if (!this.props.photo) {
            return null
        }

        const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null;

        return (
            <div className="photo-form-main">

                {this.renderErrors()}
                {this.titleChooser()}

                <div className="photo-form-env">

                    {this.fileChooser()}
                    <br/>
                    <input 
                        className="photo-file-selector" 
                        id="select-file" 
                        name="file" 
                        type="file" 
                        onChange={this.handleFile.bind(this)} 
                    />
                    <br/>
                    

                    <form className="photo-form" onSubmit={this.handleSubmit}>

                        <div className="photo-form-preview-env">
                            <div className="photo-form-preview">{preview}</div>
                        </div>

                        <div className="photo-form-input">

                            <p>Photo Details</p>

                            <label>Title*
                                <br/>
                                <input 
                                    id="photo_upload_title_input" 
                                    type="text" 
                                    value={this.state.title} 
                                    onChange={this.update('title')} 
                                    required
                                />
                            </label>

                            <label>Description
                                <br/>
                                <input 
                                    type="text" 
                                    value={this.state.description} 
                                    onChange={this.update('description')} 
                                />
                            </label>

                                {this.submitButton()}
                                {this.deleteButton()}

                        </div>
                    </form>
                </div>
            </div>
        )
    };

};

export default PhotoForm;