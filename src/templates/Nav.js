import Post from "../utils/Post";

const Nav = () => {
    let rigthNav = null || document.getElementById('rigthNav');
    const view  = Post.forEach(e => {
        rigthNav.innerHTML = `
        <spam>${e.name}</spam>
        <spam>${e.url}</spam>
    `});
    return view;
};

export default Nav;