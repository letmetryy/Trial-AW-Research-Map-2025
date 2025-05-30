ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12824419.906767, -958767.829466, 12830123.629268, -955832.757409]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DataCollectionPlots_1 = new ol.format.GeoJSON();
var features_DataCollectionPlots_1 = format_DataCollectionPlots_1.readFeatures(json_DataCollectionPlots_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DataCollectionPlots_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DataCollectionPlots_1.addFeatures(features_DataCollectionPlots_1);
var lyr_DataCollectionPlots_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DataCollectionPlots_1, 
                style: style_DataCollectionPlots_1,
                popuplayertitle: 'Data Collection Plots',
                interactive: true,
    title: 'Data Collection Plots<br />\
    <img src="styles/legend/DataCollectionPlots_1_0.png" /> Babakan<br />\
    <img src="styles/legend/DataCollectionPlots_1_1.png" /> Ketapang<br />\
    <img src="styles/legend/DataCollectionPlots_1_2.png" /> Lambing<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_DataCollectionPlots_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DataCollectionPlots_1];
lyr_DataCollectionPlots_1.set('fieldAliases', {'id': 'id', 'Farmer': 'Farmer', 'Area (Are)': 'Area (Are)', 'Complexity': 'Complexity', 'Munduk': 'Munduk', 'Level': 'Level', 'SOC': 'SOC', 'CEC': 'CEC', 'N': 'N', 'P': 'P', 'K': 'K', 'pH': 'pH', 'Microorganism': 'Microorganism', 'Index Diversity Index (H\')': 'Index Diversity Index (H\')', 'Flora Diversity Index (H\')': 'Flora Diversity Index (H\')', 'Fauna Diversity Index (H\')': 'Fauna Diversity Index (H\')', 'Pesticide Residue Level': 'Pesticide Residue Level', 'Protein Content': 'Protein Content', 'Micronutrient': 'Micronutrient', 'Antioxidant Level': 'Antioxidant Level', });
lyr_DataCollectionPlots_1.set('fieldImages', {'id': 'TextEdit', 'Farmer': 'TextEdit', 'Area (Are)': 'TextEdit', 'Complexity': 'TextEdit', 'Munduk': 'TextEdit', 'Level': 'TextEdit', 'SOC': 'Range', 'CEC': 'Range', 'N': 'Range', 'P': 'Range', 'K': 'Range', 'pH': 'Range', 'Microorganism': 'Range', 'Index Diversity Index (H\')': 'Range', 'Flora Diversity Index (H\')': 'Range', 'Fauna Diversity Index (H\')': 'Range', 'Pesticide Residue Level': 'Range', 'Protein Content': 'Range', 'Micronutrient': 'Range', 'Antioxidant Level': 'Range', });
lyr_DataCollectionPlots_1.set('fieldLabels', {'id': 'hidden field', 'Farmer': 'header label - visible with data', 'Area (Are)': 'header label - visible with data', 'Complexity': 'header label - visible with data', 'Munduk': 'hidden field', 'Level': 'no label', 'SOC': 'header label - visible with data', 'CEC': 'header label - visible with data', 'N': 'header label - visible with data', 'P': 'header label - visible with data', 'K': 'header label - visible with data', 'pH': 'header label - visible with data', 'Microorganism': 'hidden field', 'Index Diversity Index (H\')': 'hidden field', 'Flora Diversity Index (H\')': 'hidden field', 'Fauna Diversity Index (H\')': 'hidden field', 'Pesticide Residue Level': 'hidden field', 'Protein Content': 'hidden field', 'Micronutrient': 'hidden field', 'Antioxidant Level': 'hidden field', });
lyr_DataCollectionPlots_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});