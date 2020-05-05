export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
    color?: string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(id: string, lat?: number, lng?: number) {
        this.googleMap = new google.maps.Map(document.getElementById(id), { zoom: 1, center: { lat: lat || 0, lng: lng || 0 } });
    }

    addMarker(mappable: Mappable) {
        const marker = new google.maps.Marker({ map: this.googleMap, position: { lat: mappable.location.lat, lng: mappable.location.lng } });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent(),
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
}
