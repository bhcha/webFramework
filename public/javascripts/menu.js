export const menuModel = {
    menuList: [
        {
            menu_icon: 'fa fa-home'
            , text: 'Home'
            , action: '/index.html'
            , level: 1
            , id: 'home'
        }
        , {
            menu_icon: 'fa fa-envelope-open-text'
            , text: 'Email'
            , action: 'javascript:;'
            , sub_menu: [{
                menu_icon: 'fa fa-envelope-open-text'
                , text: 'Inbox'
                , action: '/email_inbox.html'
                , parent_id: 'email'
            }, {
                menu_icon: 'fa fa-envelope-open-text'
                , text: 'Compose'
                , action: '/email_compose.html'
                , parent_id: 'email'
            }, {
                menu_icon: 'fa fa-envelope-open-text'
                , text: 'Detail'
                , action: '/email_detail.html'
                , parent_id: 'email'
            }
            ]
        }
        ,{
            menu_icon: 'fa fa-home'
            , text: 'Home2'
            , action: '/index2.html'
            , level: 1
            , id: 'home2'
        }
        , {
            menu_icon: 'fa fa-envelope-open-text'
            , text: 'Email2'
            , action: 'javascript:;'
            , sub_menu: [{
                menu_icon: 'fa fa-envelope-open-text'
                , text: 'Inbox2'
                , action: '/email_inbox2.html'
                , parent_id: 'email'
            }, {
                menu_icon: 'fa fa-envelope-open-text'
                , text: 'Compose2'
                , action: '/email_compose2.html'
                , parent_id: 'email'
            }, {
                menu_icon: 'fa fa-envelope-open-text'
                , text: 'Detail2'
                , action: '/email_detail2.html'
                , parent_id: 'email'
            }
            ]
        }
    ],
    init(initialModel) { this.menuList = initialModel.menuList; }
}
