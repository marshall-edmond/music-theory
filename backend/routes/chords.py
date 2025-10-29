from backend.routes.scales import Major_Scale, Minor_Scale


#major consists of root, 3rd and fifth of the roots major sca;e
def major_chord(root: str)-> list:
    '''return a list of the root, third and fifth'''
    s = Major_Scale(root)
    major = s[:5:2]
    return major

def minor_chord(root:str) -> list:
    s = Minor_Scale(root)
    minor = s[:5:2]
    return minor

def Seventh_Chord(root: str) -> list:
    pass 
