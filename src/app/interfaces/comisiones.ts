export interface ComisionesResponse {
    data1 : Comision[],
    data2 : Comision[],
    data3 : Comision[]
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

