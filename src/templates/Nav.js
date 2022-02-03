import Post from "../utils/Post";

const Nav = () => {
    let rigthNav = null || document.getElementById('rigthNav');
    rigthNav.innerHTML = ``;

    const view = Post.forEach(e => {
        rigthNav.innerHTML += `
            <a href="${e.url}">${e.name}</a>
    `});
    return view;
};

export default Nav;