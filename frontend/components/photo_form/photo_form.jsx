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
        debugger

        this.props.uploadPhoto(formData);
    };

    update(field){
        // debugger
        return e => this.setState({[field]: e.target.value});
    };

    render() {
        const { title, description } = this.state;
        const preview = this.state.photoUrl? <img height="200px" width="300px" src={this.state.photoUrl}/> : null;
        debugger
        return (
            <div className="photo-form-main">
                <div className="photo-form">
                    <h2>Upload Photo</h2>

                    <form onSubmit={this.handleSubmit}>

                        <label>Title</label>
                        <input type="text" value={title} onChange={this.update('title')}/>


                        <label>Description</label>
                        <input type="text" value={description} onChange={this.update('description')}/>
                        

                        <div>
                            {preview}
                            <label>Image Preview</label>
                            <input type="file" onChange={this.handleFile.bind(this)}/>
                        </div>

                        <input type="submit" value="Upload Photo"/>

                    </form>


                </div>
            </div>
        )
    };

};

export default PhotoForm;