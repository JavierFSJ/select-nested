export interface Pais {
  name:         Name;
  cca3:         string;
  capital:      string[];
  altSpellings: string[];
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: NativeName;
}

export interface NativeName {
  fra: Fra;
}

export interface Fra {
  official: string;
  common:   string;
}


export interface PaisSmall {
  capital:      string[];
  altSpellings: string[];
  borders:      string[];
}
