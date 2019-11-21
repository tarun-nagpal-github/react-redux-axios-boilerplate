// let moduleAndPages = [
//     {
//         "moduleId": 1,
//         "moduleName": "User",
//         "pages": [
//             {
//                 "pageId": 2,
//                 "pageName": "Create User",
//                 "pageUrl": "create-user",
//                 "actions": [
//                     {
//                         "actionId": 1,
//                         "actionName": "Create User",
//                         "actionUrl": "createuser"
//                     }
//                 ]
//             },
//             {
//                 "pageId": 3,
//                 "pageName": "Edit User",
//                 "pageUrl": "edit-user",
//                 "actions": [
//                     {
//                         "actionId": 2,
//                         "actionName": "Edit User",
//                         "actionUrl": "edituser"
//                     }
//                 ]
//             },
//             {
//                 "pageId": 4,
//                 "pageName": "View user",
//                 "pageUrl": "view-user",
//                 "actions": [
//                     {
//                         "actionId": 3,
//                         "actionName": "View User",
//                         "actionUrl": "view-user"
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         "moduleId": 2,
//         "moduleName": "Permission",
//         "pages": [
//             {
//                 "pageId": 5,
//                 "pageName": "Add Permission",
//                 "pageUrl": "add-permission",
//                 "actions": [
//                     {
//                         "actionId": 4,
//                         "actionName": "Add Permission",
//                         "actionUrl": "add-permission"
//                     }
//                 ]
//             }
//         ]
//     }
// ];

let moduleAndPages = window.localStorage.getItem('moduleAndPages');
let pagesAndPermissions = window.localStorage.getItem('moduleAndPages');
export const isModuleExists = (pagesAndPermissions = moduleAndPages, moduleName = "", pageUrl = null) => {
    let returnValue = false;
    if (pagesAndPermissions && Array.isArray(pagesAndPermissions)) {
        pagesAndPermissions.forEach((item) => {
            if (item.moduleName == moduleName) {
                returnValue = true;
            }
        });
    }
    return returnValue;
}


export const isPageExists = (pagesAndPermissions = moduleAndPages, moduleName = "", pageUrl = null) => {
    let returnValue = false;
    if (pagesAndPermissions && Array.isArray(pagesAndPermissions)) {
        pagesAndPermissions.forEach((item) => {
            if (item.moduleName == moduleName) {
                if (pageUrl && item && Array.isArray(item.pages)) {
                    item.pages.forEach((page) => {
                        if (page.pageUrl == pageUrl) {
                            returnValue = true;
                        }
                    });
                }
            }
        });

    }
    return returnValue;
}


export const isPageExistsGlobally = (pageUrl = null) => {
    let returnValue = false;
    if (pagesAndPermissions && Array.isArray(pagesAndPermissions)) {
        moduleAndPages.forEach((item) => {
            item.pages.forEach((page) => {
                if (page.pageUrl == pageUrl) {
                    returnValue = true;
                }
            });
        });
    }
    return returnValue;
}
