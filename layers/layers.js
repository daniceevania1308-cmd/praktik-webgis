var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_its_manyar_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'its_manyar<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/its_manyar_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -197.000000, 350.000000, 0.000000]
        })
    });
var lyr_its_sukolilo_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'its_sukolilo<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/its_sukolilo_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
        })
    });
var lyr_uin_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'uin<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/uin_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
        })
    });
var lyr_unair_a_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unair_a<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unair_a_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -198.000000, 350.000000, 0.000000]
        })
    });
var lyr_unair_b_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unair_b<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unair_b_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -270.000000, 350.000000, 0.000000]
        })
    });
var lyr_unair_c_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unair_c<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unair_c_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -252.000000, 350.000000, 0.000000]
        })
    });
var lyr_unesa_ketintang_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unesa_ketintang<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unesa_ketintang_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -233.000000, 350.000000, 0.000000]
        })
    });
var lyr_upnv_jatim_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'upnv_jatim<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/upnv_jatim_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -350.000000, 350.000000, 0.000000]
        })
    });
var lyr_unesa_lidahwetan_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'unesa_lidahwetan<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/unesa_lidahwetan_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -263.000000, 350.000000, 0.000000]
        })
    });
var format_aksesibilitas_univunion_10 = new ol.format.GeoJSON();
var features_aksesibilitas_univunion_10 = format_aksesibilitas_univunion_10.readFeatures(json_aksesibilitas_univunion_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univunion_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univunion_10.addFeatures(features_aksesibilitas_univunion_10);
var lyr_aksesibilitas_univunion_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univunion_10, 
                style: style_aksesibilitas_univunion_10,
                popuplayertitle: 'aksesibilitas_univ — union',
                interactive: true,
                title: '<img src="styles/legend/aksesibilitas_univunion_10.png" /> aksesibilitas_univ — union'
            });
var format_univ_surabaya_11 = new ol.format.GeoJSON();
var features_univ_surabaya_11 = format_univ_surabaya_11.readFeatures(json_univ_surabaya_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya_11.addFeatures(features_univ_surabaya_11);
var lyr_univ_surabaya_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya_11, 
                style: style_univ_surabaya_11,
                popuplayertitle: 'univ_surabaya',
                interactive: true,
                title: '<img src="styles/legend/univ_surabaya_11.png" /> univ_surabaya'
            });
var format_PTNdiSurabaya_12 = new ol.format.GeoJSON();
var features_PTNdiSurabaya_12 = format_PTNdiSurabaya_12.readFeatures(json_PTNdiSurabaya_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTNdiSurabaya_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTNdiSurabaya_12.addFeatures(features_PTNdiSurabaya_12);
var lyr_PTNdiSurabaya_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTNdiSurabaya_12, 
                style: style_PTNdiSurabaya_12,
                popuplayertitle: 'PTN di Surabaya',
                interactive: true,
    title: 'PTN di Surabaya<br />\
    <img src="styles/legend/PTNdiSurabaya_12_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTNdiSurabaya_12_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTNdiSurabaya_12_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTNdiSurabaya_12_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTNdiSurabaya_12_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTNdiSurabaya_12_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTNdiSurabaya_12_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTNdiSurabaya_12_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTNdiSurabaya_12_8.png" /> UPNV Jatim<br />' });

lyr_ESRIGraylight_0.setVisible(true);lyr_its_manyar_1.setVisible(true);lyr_its_sukolilo_2.setVisible(true);lyr_uin_3.setVisible(true);lyr_unair_a_4.setVisible(true);lyr_unair_b_5.setVisible(true);lyr_unair_c_6.setVisible(true);lyr_unesa_ketintang_7.setVisible(true);lyr_upnv_jatim_8.setVisible(true);lyr_unesa_lidahwetan_9.setVisible(true);lyr_aksesibilitas_univunion_10.setVisible(true);lyr_univ_surabaya_11.setVisible(true);lyr_PTNdiSurabaya_12.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_its_manyar_1,lyr_its_sukolilo_2,lyr_uin_3,lyr_unair_a_4,lyr_unair_b_5,lyr_unair_c_6,lyr_unesa_ketintang_7,lyr_upnv_jatim_8,lyr_unesa_lidahwetan_9,lyr_aksesibilitas_univunion_10,lyr_univ_surabaya_11,lyr_PTNdiSurabaya_12];
lyr_aksesibilitas_univunion_10.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya_11.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ_QS WUR': 'Deskripsi Univ_QS WUR', 'Deskripsi Univ_Didirikan': 'Deskripsi Univ_Didirikan', 'Deskripsi Univ_Fakultas': 'Deskripsi Univ_Fakultas', });
lyr_PTNdiSurabaya_12.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Rangking QS WUR': 'Rangking QS WUR', 'Tahun Berdiri': 'Tahun Berdiri', 'Fakultas': 'Fakultas', 'Foto': 'Foto', });
lyr_aksesibilitas_univunion_10.set('fieldImages', {'fid': '', 'Access': '', });
lyr_univ_surabaya_11.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_PTNdiSurabaya_12.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Rangking QS WUR': 'TextEdit', 'Tahun Berdiri': 'Range', 'Fakultas': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_aksesibilitas_univunion_10.set('fieldLabels', {'fid': 'no label', 'Access': 'no label', });
lyr_univ_surabaya_11.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', 'Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ_Fakultas': 'no label', });
lyr_PTNdiSurabaya_12.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Rangking QS WUR': 'no label', 'Tahun Berdiri': 'no label', 'Fakultas': 'no label', 'Foto': 'no label', });
lyr_PTNdiSurabaya_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});