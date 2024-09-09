export interface ComisionesResponse {
    comisionesP : Comision[],
    comisionesE : Comision[],
    comisionesL : Comision[]
}


export interface Comision {
    id:               string;
    nombre:           string;
    importancia:      null | string;
    tipo_comision_id: string;
    tipo:             Tipo;
}

export interface Tipo {
    id:         string;
    valor:      string;
    created_at: Date;
    updated_at: Date;
}

export interface ComDataResponse {
    integrantes: ComResponse[],
    nombre: NombreComision
}

export interface ComResponse {
    id:                        string;
    comision_id:               string;
    integrante_legislatura_id: string;
    tipo_cargo_comision_id:    string;
    integrante_legislatura:    IntegranteLegislatura;
    cargo:                     Cargo;
}

export interface NombreComision {
    id:                     string;
    nombre:                 string;
    importancia:            string;
    tipo_comision_id:       string;
    alias:                  string;
    cargo:                  string;
    created_at:             Date;
    updated_at:             Date;
    deleted_at:             Date;
}

export interface Cargo {
    id:    string;
    valor: string;
}

export interface IntegranteLegislatura {
    id:             string;
    legislatura_id: string;
    dato_user_id:   string;
    partido_id:     string;
    distrito_id:    string;
    diputado:       Diputado;
    partido:        Partido;
}

export interface Diputado {
    id:       string;
    apaterno: string;
    amaterno: string;
    nombres:  string;
    user_id:  string;
    genero:  Genero;
    foto:     Foto;
}
export interface Genero {
    id:            string;
    genero:          string;
}

export interface Foto {
    id:            string;
    path:          string;
    fotoable_id:   string;
    fotoable_type: FotoableType;
    created_at:    Date;
    updated_at:    Date;
    deleted_at:    null;
}

export enum FotoableType {
    AppModelsDatosUser = "App\\Models\\DatosUser",
}

export interface Partido {
    id:      string;
    siglas:  string;
    nombre:  string;
    emblema: string;
    rgb:     string;
    rgb2:    string;
}
