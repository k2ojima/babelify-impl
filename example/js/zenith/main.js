
import '~/bootstrap';
import { Client } from '~/zenith/Client.js';
import { ProductSubscriber } from '~/zenith/ProductSubscriber.js';

// this is sample code
$(() => {
    let client = new Client();
    client.add(new ProductSubscriber('iPhone 7', '$600'));
    client.add(new ProductSubscriber('Google nexus', '$900'));
    client.work();
});
