// .. the strater code you pasted ...
const e = React.createElement;

function LikeButton(){
    // Display a "Like" <button>
    return e(
        'button',
        {
            onclick: () => alert('berhasil')
        },
        'Like'
    );
}

// const button=()=>{
//     return <button>Like</button>
// }

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
