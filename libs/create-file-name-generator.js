/**
 *
 * @param PRODUCTION_MODE
 * @returns {hashedName}
 */
module.exports = function createFileNameGenerator(PRODUCTION_MODE) {
    return function hashedName(name, ext, productionHash, developmentHash) {
        let hash;
        if (arguments < 2) {
            throw new Error('Not specified file name and extension');
        } else if (arguments < 4) {
            hash = productionHash;
        } else {
            hash = PRODUCTION_MODE ? productionHash: developmentHash;
        }
        if (hash == null) {
            return `${name}.${ext}`;
        } else {
            return `${name}-${hash}.${ext}`;
        }
    };
};

