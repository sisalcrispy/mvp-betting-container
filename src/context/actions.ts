import mutations from "./mutations";
import Libraries from 'sisal-mvp-betting-library';

const {switchLanguage } = Libraries.TranslationsService('global');


const actions = (actionName: string): Promise<object> => {
    let newState = {};
    switch(actionName){
        case 'updateUserStatus':
            newState =  mutations.updateUserStatus();
            break;
        case 'switchLanguage':
            switchLanguage();
            newState =  mutations.updateLanguage();
            break;
    }
    return Promise.resolve(newState);
};

export default actions;