
export const sideMenu = (path, menu) => {
        return menu.menuList.map((_item, index) => {
            const icon = _item.menu_icon;
            const text = _item.text;
            const action = _item.action;
            const subMenu = _item.sub_menu;

            let isLevel2Click = false;
            if (subMenu) {
                for (_item of subMenu) {
                    if (_item.action === path) {
                        isLevel2Click = true;
                        break;
                    }
                }
            }

            return `<div class="menu-item ${(path === '/' && index === 0) || (path === action) ? `active` : ``} ${(subMenu) ? `has-sub` : ``} ${isLevel2Click ? `expand` : ``}">
                     <a href="${action}" class="menu-link">
                         <span class="menu-icon"><i class="${icon}"></i></span>
                         <span class="menu-text">${text}</span>
                         ${(subMenu) ? `<span class="menu-caret"><b class="caret"></b></span>` : ``}
                     </a>
                     ${(subMenu) ?
                `<div class="menu-submenu">
                                            ${subMenu.map((_subItem) => {
                    return `<div class="menu-item ${(path === _subItem.action) ? `active` : ``}"><a href="${_subItem.action}" class="menu-link">
                                                <span class="menu-text">${_subItem.text}</span>
                                                </a></div>`
                }).join('')}
                                        
                                     </div>
                                    `
                : ``}
                </div>`
        }).join('')
    }
;

