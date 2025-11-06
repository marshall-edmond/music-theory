from backend.routes.scales import Major_Scale, Natural_Minor

#major consists of root, 3rd and fifth of the roots major sca;e
def major_chord(root: str)-> list:
    '''return a list of the root, third and fifth'''
    s = Major_Scale(root)
    major = s[:5:2]
    return major

def minor_chord(root:str) -> list:
    s = Natural_Minor(root)
    minor = s[:5:2]
    return minor

def Major_Seventh_Chord(root: str) -> list:
    '''generate a major 7th chord based on the root'''
    pass

def Minor_Seventh_Chord(root:str) -> list:
    '''generate a minor 7th chord based on the root'''
    pass

    
