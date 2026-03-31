const sharps = ['C','C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const flats = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

//whole, half, whole, whole, half, whole, whole
const formula = [2, 1, 2, 2, 1, 2, 2]

const validateRoot = (root: string) => sharps.includes(root) || flats.includes(root);

export const minorScale = (inputRoot: string) => {
    if (!validateRoot(inputRoot))
        return [];

    // TODO: build out minor scale using formula
    return [];
}
