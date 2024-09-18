export interface Debates {
  Tomos: Tomos;
}

export interface Tomos {
  Tomo1: Tomo1Element[];
  Tomo2: Tomo1Element[];
  Tomo3: Tomo1Element[];
}

export interface Tomo1Element {
  id:           string;
  descripcion:  string;
  path:         string;
  fecha_debate: Date;
  id_tomo:      string;
  created_at:   Date;
  updated_at:   Date;
  tomo:         TomoClass;
}

export interface TomoClass {
  id:         string;
  tomo:       string;
  alias:      string;
  created_at: Date;
  updated_at: Date;
}
