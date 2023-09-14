import { App } from "./appRoute.js";
import { menuModel } from "./menu.js";


function updateMenuItems(todoItems) {
    const headers = {  'Content-Type': 'application/json',  };
    const body = JSON.stringify({ todoItems });
    return fetch('/api/syncMenu', { method: 'put', headers, body }).then(res => res.json());
}

async function syncServerModel() {
    const newmenuList = await updateMenuItems(menuModel.menuList);
    menuModel.init({ menuList: newmenuList });
}

function redeclarationEventSlideMenuExpand() {
    let menuBaseSelector = '.'+ app.sidebar.class +' .'+ app.sidebar.menu.class +' > .'+ app.sidebar.menu.itemClass +'.'+ app.sidebar.menu.hasSubClass;
    let menuLinkSelector =  menuBaseSelector + ' > .'+ app.sidebar.menu.itemLinkClass;
    let menus = [].slice.call(document.querySelectorAll(menuLinkSelector));
    handleSidebarMenuToggle(menus);
}

async function render() {
    const path = location.pathname;
    const $app = document.querySelector('#app');

    $app.innerHTML = await App(path, menuModel);

    document.querySelectorAll('a').forEach($a => {
            $a.addEventListener('click', (event) => {
                const path = $a.getAttribute('href');

                if (path.indexOf('#') === 0) {
                    return;
                }

                if ($a.href === path) {
                    return;
                }
                // 새로고침 막기
                event.preventDefault();
                // 주소 바꾸기
                history.pushState(null, null, path);
                render();
            })

    })

    document.querySelector('.app-sidebar-mobile-backdrop').addEventListener('click', ()=>{
        document.querySelector('#app').classList.remove('app-sidebar-mobile-toggled');
    });

    redeclarationEventSlideMenuExpand();

    if (path !== '/') return;
}

function main() {
    menuModel.init(window.__INITIAL_MENU__);
    render().then(
        window.addEventListener('popstate', render)
    );
}

main();