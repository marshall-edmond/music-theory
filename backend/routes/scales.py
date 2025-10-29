from _statics import NOTES_SHARP, NOTES_FLAT

#Constants 2 = Whole, 1 = Half
MAJOR_FORMULA = [2,2,1,2,2,2,1]
MINOR_FORMULA = [2,1,2,2,1,2,2]
HARMONIC_MINOR = [2,1,2,2,1,3,1]

#helper to strip of white space, handle unicode
def normalize_root(root)-> str:
    '''helper to normalize root'''
    accepted_char = {"♯": "#",
                     "♭":"b"}
    s = list(root.strip())
    s[0 ]= s[0].upper()
   
    if len(s) == 2:
        if s[1] == "♯":
            s[1] = accepted_char.get("♯")
        elif s[1] == "♭":
            s[1] = accepted_char.get("♭")
    if len(s) == 2:
        return s[0] + s[1]
    return s[0]

def generate_major(root: str, formula=NOTES_SHARP)-> list:
    '''generate formula based on the given accidental'''
    notes = [root]
    start = formula.index(root)
    pos = start
    for step in MAJOR_FORMULA:
        pos = (pos + step) % 12
        #if theres a duplicate in the first letter, default to the flat/sharp version
        if formula == NOTES_SHARP:
            opposite = NOTES_FLAT
        elif formula == NOTES_FLAT:
            opposite = NOTES_SHARP
        if formula[pos] in notes:
            notes.append(opposite[pos])
        else:
         notes.append(formula[pos])
    
    return notes[:-1]


def generate_nat_minor(root: str, formula= None)-> list:
    '''generate minor scale based on formula'''

    if formula != NOTES_SHARP and formula != NOTES_FLAT:
        raise ValueError('Incorrect formula given')
    
    notes = [root]
    start = formula.index(root)
    pos = start
    

    
    if formula == NOTES_SHARP:

        for step in MINOR_FORMULA:
            pos = (pos + step) % 12
            #check for repeating letters 
            if formula[pos][0] in notes:
                    notes.append(NOTES_FLAT[pos])
            else:
                    notes.append(formula[pos])
    
    elif formula == NOTES_FLAT:

        for step in MINOR_FORMULA:
            pos = (pos + step) % 12

            if formula[pos][0] in notes:
                    notes.append(NOTES_SHARP)

            else:
                notes.append(formula[pos])

    return notes[:-1]


def generate_harmonic(root, formula=None):
    check_root(root)



def check_root(root)-> None:
    '''helper to check if the given root is in Notes_sharp or Notes_Flat'''
    if root not in  NOTES_SHARP and root not in NOTES_FLAT:
        raise IndexError("Error--The Note doesn't exist")
        

def Major_Scale(root: str)-> list:
    '''Generate major scale based on a given root'''
    root = normalize_root(root)
    check_root(root)
    if root in NOTES_SHARP:
        notes = generate_major(root, NOTES_SHARP)
    elif root in NOTES_FLAT:
        notes = generate_major(root, NOTES_FLAT)

    return notes

     
def Natural_Minor(root)-> list: 
    '''Generate natural minor scale based on a given root'''
    root = normalize_root(root)
    check_root(root)
    if root in NOTES_SHARP:
        notes = generate_nat_minor(root, NOTES_SHARP)
    elif root in NOTES_FLAT:
        notes = generate_nat_minor(root, NOTES_FLAT)
    
    return notes

def Harmonic_Minor(root, formula=None):
    ''' generate harmonic minor scale based on given root'''
    natural = Natural_Minor(root)

def Melodic_Minor(root, formula= None):
    pass 