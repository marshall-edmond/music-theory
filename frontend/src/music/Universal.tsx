//flat family
export const flats = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb']

//navigate arrays based on if root is in ^flats
export const flatNotes =  ['C', 'Db', 'D', 'Eb','E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']
export const sharpNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']

export const sharpstoflats : Record<string, string>= {
    'C#' : 'Db',
    'D#' : 'Eb',
    'F#' : 'Gb',
    'G#' : 'Ab',
    'A#' : 'Bb'
}