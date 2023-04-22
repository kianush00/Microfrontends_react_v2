export default function Root(props) {
  const json_aire = {
    "nombre": "Las Encinas Temuco",
    "key": "901",
    "latitud": -38.748650731093,
    "longitud": -72.619012605804,
    "comuna": "Temuco",
    "red": "Red MMA",
    "region": "Región de La Araucanía",
    "regionindex": 11,
    "calificacion": "Pública",
    "empresa": "Ministerio del Medio Ambiente",
    "realtime": [
    {
    "code": "PM25",
    "name": "MP-2,5",
    "info": {
    "cols": [
    {
    "label": "hora",
    "type": "string"
    },
    {
    "label": "valor",
    "type": "number"
    },
    {
    "label": "nivel",
    "type": "string",
    "role": "style"
    },
    {
    "label": "nivel",
    "type": "string",
    "role": "tooltip",
    "p": {
    "html": true
    }
    }
    ],
    "rowElements": [
    {
    "v": "2023-04-22 08:00"
    },
    {
    "v": 27
    },
    {
    "v": "#2eae00"
    },
    {
    "v": "<strong>17 &micro;g&#8260;m<sup>3</sup></strong> 34 ICAP<br><em>2023-04-22 08:00 hrs.</em>"
    }
    ]
    },
    "datetime": "2023-04-22 16:05 hrs. UTC-04",
    "tableRow": {
    "color": "#2eae00",
    "status": "bueno",
    "statuscode": 1,
    "datetime": "2023-04-22 14:00",
    "parameter": "MP 2,5",
    "movil": "media m&oacute;vil 24 h",
    "value": 17,
    "unit": "&micro;g&#8725;m<sup>3</sup>",
    "icap": 34,
    "icapText": "ICAP"
    }
    },
    {
    "code": "PM10",
    "name": "MP-10",
    "info": {
    "cols": [
    {
    "label": "hora",
    "type": "string"
    },
    {
    "label": "valor",
    "type": "number"
    },
    {
    "label": "nivel",
    "type": "string",
    "role": "style"
    },
    {
    "label": "nivel",
    "type": "string",
    "role": "tooltip",
    "p": {
    "html": true
    }
    }
    ],
    "rowElements": [
    {
    "v": "2023-04-22 08:00"
    },
    {
    "v": 36
    },
    {
    "v": "#2eae00"
    },
    {
    "v": "<strong>26 &micro;g&#8260;m<sup>3</sup>N</strong> 20 ICAP<br><em>2023-04-22 08:00 hrs.</em>"
    }
    ]
    },
    "datetime": "2023-04-22 16:05 hrs. UTC-04",
    "tableRow": {
    "color": "#2eae00",
    "status": "bueno",
    "statuscode": 1,
    "datetime": "2023-04-22 14:00",
    "parameter": "MP 10",
    "movil": "media m&oacute;vil 24 h",
    "value": 26,
    "unit": "&micro;g&#8725;m<sup>3</sup>N",
    "icap": 20,
    "icapText": "ICAP"
    }
    },
    {
    "code": "0004",
    "name": "Monóxido de carbono",
    "info": {
    "cols": [
    {
    "label": "hora",
    "type": "string"
    },
    {
    "label": "valor",
    "type": "number"
    },
    {
    "label": "nivel",
    "type": "string",
    "role": "style"
    },
    {
    "label": "nivel",
    "type": "string",
    "role": "tooltip",
    "p": {
    "html": true
    }
    }
    ],
    "rowElements": [
    {
    "v": "2023-04-22 08:00"
    },
    {
    "v": 10.1
    },
    {
    "v": "#2eae00"
    },
    {
    "v": "<strong>0.10 ppmv</strong><br><em>2023-04-22 08:00 hrs.</em>"
    }
    ]
    },
    "datetime": "2023-04-22 16:05 hrs. UTC-04",
    "tableRow": {
    "color": "#2eae00",
    "status": "bueno",
    "statuscode": 1,
    "datetime": "2023-04-22 08:00",
    "parameter": "Mon&oacute;xido de carbono",
    "movil": "media m&oacute;vil 8 h",
    "value": 0.1,
    "unit": "ppmv",
    "icap": null,
    "icapText": null
    }
    }
    ]
    }
  
    const ulStyle = {color : 'white', fontSize:'23px'}
    const titleStyle = {color : 'white', fontSize:'46px'}
    const greenColorStyle = {color : '#2eae00'}

  return (
    <div>
      <h1 style={titleStyle}>Calidad del aire en {json_aire.nombre}</h1>
      <h1 style={ulStyle}>Estado: <span style={greenColorStyle}>Bueno</span></h1>
      <h1 style={ulStyle}>{json_aire.realtime[0].name}: {json_aire.realtime[0].info.rowElements[1].v}</h1>
      <h1 style={ulStyle}>{json_aire.realtime[1].name}: {json_aire.realtime[1].info.rowElements[1].v}</h1>
      <h1 style={ulStyle}>{json_aire.realtime[2].name}: {json_aire.realtime[2].info.rowElements[1].v}</h1>
      <img src="https://mma.gob.cl/wp-content/uploads/2016/03/temucores.jpg" alt="Temuco, Chile" />
    </div>
    
  );
}
