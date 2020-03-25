import mutations from "./mutations";
import TranslationsService from "../services/translations.service";

const {switchLanguage } = TranslationsService();


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