
/**
 * Данная сборка подерживает два профиля: production и development.
 *
 * При запуске сборки каждая npm-команда активизирует тот или иной профиль.
 * На текущий момент npm-команды соответствуют следующим профилям:
 * 1) build -> production
 * 2) serve -> development
 *
 * Также при запуске сборки после команды можно указать набор фич, которые неообходимо
 * включить в сборку. Это делается посредством перечисления фич после npm-команды
 * через символ ':', например: 'npm run serve:mock'.
 *
 * В конфиге сборки данные фичи доступны через profile.hasFeature('featureName').
 * В приложении данные фичи доступны через глобальные переменные APP_FEATURE_FEATURE_NAME.
 *
 * На текущий момент поддерживаются следующие фичи:
 * 1) mock - активизирует Mock Модуль в приложении
 *
 * @param npmLifecycleEvent
 */
module.exports = function activateProfile(npmLifecycleEvent, defaultProfile) {
    /** Маппинг задает соответствие команд профилям, с которыми будет запускаться приложение */
    const PROFILES_MAPPING = {
        'build': 'production',
        'serve': 'development'
    };

    const profile = {
        name: defaultProfile,
        features: [],
        hasFeature: function (feature) {
            return this.features.indexOf(feature) >= 0;
        },
        isProduction: function () {
            return this.name == 'production'
        }
    };
    const arr = npmLifecycleEvent.split(":");
    if (arr.length > 0) {
        profile.name = PROFILES_MAPPING[arr[0]];
        if (arr.length > 1) {
            profile.features = arr.slice(1);
        }
    }
    return profile;
};