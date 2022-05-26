import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#0A283E',
        color: '#ffff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',        
    }
}

class Button extends Component {
    render() {
        // let btn = document.getElementById('btnShowBessage')
        // btn.addEventListener('onclick', function(event){
        // alert('Hola perros')
        // });
        // console.log("HOLA A TODOS",btn)
        return (
            <button id="btnShowBessage" style={styles.button} {...this.props} />
        )
    }
}
export default Button