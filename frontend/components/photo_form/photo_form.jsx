import React from 'react';

class PhotoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            authorId: this.props.currentUserId,
            photoFile: null,
            photoUrl: null
        };
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
        formData.append('photo[author_id]', this.state.authorId);
        formData.append('photo[photo_file]', this.state.photoFile);
        // debugger

        this.props.uploadPhoto(formData);
    };

    update(field){
        // debugger
        return e => this.setState({[field]: e.target.value});
    };

    render() {
        const { title, description } = this.state;
        const preview = this.state.photoUrl ? <img width="100%" src={this.state.photoUrl}/> : null;
        // debugger
        return (
            <div className="photo-form-main">
                <h2 className="photo-form-title">Upload</h2>

                <div className="photo-form-env">

                    {/* <input className="photo-file-selector" type="file" onChange={this.handleFile.bind(this)} /> */}
                    <label className="choose-a-file" for="select-file">Choose a file</label>
                    <br/>
                    <input className="photo-file-selector" id="select-file" name="file" type="file" onChange={this.handleFile.bind(this)} />
                    <br/>
                    

                    <form className="photo-form" onSubmit={this.handleSubmit}>

                        <div className="photo-form-preview-env">
                            <div className="photo-form-preview">{preview}</div>
                        </div>

                        <div className="photo-form-input">

                            <p>Details</p>

                            <label>Title*
                                <br/>
                                <input type="text" value={title} onChange={this.update('title')} />
                            </label>

                            <label>Description
                                <br/>
                                <input type="text" value={description} onChange={this.update('description')} />
                            </label>

                            {/* <label> */}
                                <input id="photo-form-button" type="submit" value="Upload" />
                            {/* </label> */}

                        </div>

                    </form>


                </div>
            </div>
        )
    };

};

export default PhotoForm;