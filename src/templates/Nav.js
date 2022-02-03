import Post from "../utils/Post";

const Nav = () => {
    let rigthNav = null || document.getElementById('rigthNav');
    rigthNav.innerHTML = ``;

    const view = Post.forEach(e => {
        rigthNav.innerHTML += `
            <a class="link-nav" href="${e.url}">
                <spam>${e.name}</spam>
            </a>
    `});
    return view;
};

export default Nav;