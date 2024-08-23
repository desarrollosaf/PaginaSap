export interface Distritos {
    id:             string;
    legislatura_id: string;
    dato_user_id:   string;
    partido_id:     string;
    distrito_id:    string;
    diputado:       Diputado;
    distrito:       Distrito;
    partido:        Partido;
}

export interface Diputado {
    id:       string;
    apaterno: string;
    amaterno: string;
    nombres:  string;
    user_id:  string;
    facebook:  string;
    twitter:  string;
    instagram:  string;
    foto:     Foto;
    user:     User;
}

export interface Foto {
    id:            string;
    path:          string;
    fotoable_id:   string;
    fotoable_type: string;
    created_at:    Date;
    updated_at:    Date;
    deleted_at:    null;
}

export interface User {
    id:    string;
    email: string;
}

export interface Distrito {
    id:           string;
    distrito:     string;
    municipio_id: null | string;
    municipio:    Municipio | null;
}

export interface Municipio {
    id:       string;
    cabecera: string;
}

export interface Partido {
    id:      string;
    siglas:  string;
    nombre:  string;
    emblema: string;
    rgb:     string;
    rgb2:    string;
}