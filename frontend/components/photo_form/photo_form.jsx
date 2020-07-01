import React from 'react';

class PhotoForm extends React.Component {

    constructor(props) {
        super(props)
        // debugger
        this.state = this.props.photo
        debugger
        // this.state = {
        //     title: this.props.photo.title || null,
        //     description: this.props.photo.description || null,
        //     author_id: this.props.photo.author_id || null,
        //     photoFile: [],
        //     photoUrl: []
        // }
        // debugger
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    };

    handleFile(e) {
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
        // debugger

        this.props.formType === "Edit" ? formData.append('id', this.state.id) : null

        this.props.formType === 'Upload' ? this.props.uploadPhoto(formData) : this.props.updatePhoto(formData)
        ;
    };



    // componentDidMount() {
    //     if (this.props.formType === 'Edit') {
    //         this.props.fetchPhoto(this.props.match.params.photoId).then(() => {
    //             // debugger
    //             // this.setState({ title: })
    //         })
    //     }
    // }

    update(field){
        // debugger
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
                <input id="photo-delete-button" type="submit" value="Delete Photo" />
            )
        }             
    }

    render() {
        debugger
        if (!this.props.photo) {
            return null
        }
        // const { title, description } = this.props.photo;
        // debugger
        const preview = this.state.photoUrl ? <img width="100%" src={this.state.photoUrl}/> : null;
        debugger

        return (
            <div className="photo-form-main">
                {/* <h2 className="photo-form-title">Upload</h2> */}
                {this.titleChooser()}

                <div className="photo-form-env">

                    {/* <input className="photo-file-selector" type="file" onChange={this.handleFile.bind(this)} /> */}
                    {/* <label className="choose-a-file" for="select-file">Choose a file</label> */}
                    {this.fileChooser()}
                    <br/>
                    <input className="photo-file-selector" id="select-file" name="file" type="file" onChange={this.handleFile.bind(this)} />
                    <br/>
                    

                    <form className="photo-form" onSubmit={this.handleSubmit}>

                        <div className="photo-form-preview-env">
                            <div className="photo-form-preview">{preview}</div>
                        </div>

                        <div className="photo-form-input">

                            <p>Photo Details</p>

                            <label>Title*
                                <br/>
                                <input type="text" value={this.state.title} onChange={this.update('title')} />
                            </label>

                            <label>Description
                                <br/>
                                <input type="text" value={this.state.description} onChange={this.update('description')} />
                            </label>

                            {/* <label> */}
                                {/* <input id="photo-form-button" type="submit" value="Upload" /> */}
                                {this.submitButton()}
                                {this.deleteButton()}
                            {/* </label> */}

                        </div>

                    </form>


                </div>
            </div>
        )
    };

};

export default PhotoForm;