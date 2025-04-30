import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  navLinks = [
    {
      label: 'Brands',
      path: '/brands',
      subItems: [
        {
          name: 'Brand A',
          childs: [
            'Product A1',
            'Product A2',
            'Product A3',
            'Product A4',
            'Product A5',
            'Product A6',
            'Product A7',
            'Product A8',
            'Product A9',
            'Product A10',
          ],
        },
        {
          name: 'Brand B',
          childs: [
            'Product B1',
            'Product B2',
            'Product B3',
            'Product B4',
            'Product B5',
            'Product B6',
            'Product B7',
            'Product B8',
            'Product B9',
            'Product B10',
          ],
        },
      ],
    },
    {
      label: 'Components',
      path: '/components',
      subItems: [
        {
          name: 'Resistors',
          childs: [
            'Resistor 1k',
            'Resistor 10k',
            'Resistor 100k',
            'Resistor 1M',
            'Resistor 220ohm',
            'Resistor 470ohm',
            'Resistor 680ohm',
            'Resistor 2k',
            'Resistor 5k',
            'Resistor 50k',
          ],
        },
        {
          name: 'Capacitors',
          childs: [
            'Capacitor 10uF',
            'Capacitor 100uF',
            'Capacitor 1uF',
            'Capacitor 47uF',
            'Capacitor 220uF',
            'Capacitor 470uF',
            'Capacitor 1000uF',
            'Capacitor 22pF',
            'Capacitor 100pF',
            'Capacitor 1nF',
          ],
        },
        {
          name: 'Capacitors',
          childs: [
            'Capacitor 10uF',
            'Capacitor 100uF',
            'Capacitor 1uF',
            'Capacitor 47uF',
            'Capacitor 220uF',
            'Capacitor 470uF',
            'Capacitor 1000uF',
            'Capacitor 22pF',
            'Capacitor 100pF',
            'Capacitor 1nF',
          ],
        },
      ],
    },
    {
      label: 'Tools',
      path: '/tools',
      subItems: [
        {
          name: 'Multimeter',
          childs: [
            'Multimeter A',
            'Multimeter B',
            'Multimeter C',
            'Multimeter D',
            'Multimeter E',
            'Multimeter F',
            'Multimeter G',
            'Multimeter H',
            'Multimeter I',
            'Multimeter J',
          ],
        },
        {
          name: 'Soldering Iron',
          childs: [
            'Soldering Iron A',
            'Soldering Iron B',
            'Soldering Iron C',
            'Soldering Iron D',
            'Soldering Iron E',
            'Soldering Iron F',
            'Soldering Iron G',
            'Soldering Iron H',
            'Soldering Iron I',
            'Soldering Iron J',
          ],
        },
      ],
    },
    {
      label: 'Development Boards',
      path: '/development-boards',
      subItems: [
        {
          name: 'Arduino',
          childs: [
            'Arduino Uno',
            'Arduino Nano',
            'Arduino Mega',
            'Arduino Leonardo',
            'Arduino Pro Mini',
            'Arduino Due',
            'Arduino Micro',
            'Arduino Zero',
            'Arduino MKR',
            'Arduino Yun',
          ],
        },
        {
          name: 'Raspberry Pi',
          childs: [
            'Raspberry Pi 4',
            'Raspberry Pi 3',
            'Raspberry Pi Zero',
            'Raspberry Pi 2',
            'Raspberry Pi Pico',
            'Raspberry Pi 400',
            'Raspberry Pi 3B+',
            'Raspberry Pi Zero W',
            'Raspberry Pi 4B',
            'Raspberry Pi Compute',
          ],
        },
      ],
    },
    {
      label: 'Power',
      path: '/power',
      subItems: [
        {
          name: 'Batteries',
          childs: [
            'AA Battery',
            'AAA Battery',
            '9V Battery',
            'Lithium Battery',
            'Rechargeable Battery',
            'CR2032 Battery',
            '18650 Battery',
            'D Battery',
            'C Battery',
            'Button Cell',
          ],
        },
        {
          name: 'Power Supplies',
          childs: [
            'Power Supply 5V',
            'Power Supply 12V',
            'Power Supply 24V',
            'Power Supply 3.3V',
            'Power Supply Adjustable',
            'Power Supply 9V',
            'Power Supply 15V',
            'Power Supply 30V',
            'Power Supply 48V',
            'Power Supply USB',
          ],
        },
      ],
    },
    {
      label: 'Communication',
      path: '/communication',
      subItems: [
        {
          name: 'Bluetooth Modules',
          childs: [
            'HC-05',
            'HC-06',
            'BLE 4.0',
            'BLE 5.0',
            'nRF52832',
            'HM-10',
            'BLE 4.2',
            'CC2541',
            'BLE Shield',
            'Bluetooth Audio',
          ],
        },
        {
          name: 'Wi-Fi Modules',
          childs: [
            'ESP8266',
            'ESP32',
            'Wi-Fi Shield',
            'NodeMCU',
            'Wemos D1',
            'ESP-01',
            'ESP32-CAM',
            'ESP32-S',
            'ESP8285',
            'Wi-Fi Router',
          ],
        },
      ],
    },
    {
      label: 'DIY Projects & Kits',
      path: '/diy-projects',
      subItems: [
        {
          name: 'Starter Kits',
          childs: [
            'Starter Kit A',
            'Starter Kit B',
            'Starter Kit C',
            'Starter Kit D',
            'Starter Kit E',
            'Starter Kit F',
            'Starter Kit G',
            'Starter Kit H',
            'Starter Kit I',
            'Starter Kit J',
          ],
        },
        {
          name: 'Robotics Kits',
          childs: [
            'Robotics Kit A',
            'Robotics Kit B',
            'Robotics Kit C',
            'Robotics Kit D',
            'Robotics Kit E',
            'Robotics Kit F',
            'Robotics Kit G',
            'Robotics Kit H',
            'Robotics Kit I',
            'Robotics Kit J',
          ],
        },
      ],
    },
    {
      label: "What's New",
      path: '/whats-new',
      subItems: [
        {
          name: 'New Arrivals',
          childs: [
            'Arrival 1',
            'Arrival 2',
            'Arrival 3',
            'Arrival 4',
            'Arrival 5',
            'Arrival 6',
            'Arrival 7',
            'Arrival 8',
            'Arrival 9',
            'Arrival 10',
          ],
        },
        {
          name: 'Featured Products',
          childs: [
            'Featured 1',
            'Featured 2',
            'Featured 3',
            'Featured 4',
            'Featured 5',
            'Featured 6',
            'Featured 7',
            'Featured 8',
            'Featured 9',
            'Featured 10',
          ],
        },
      ],
    },
  ];

  activeLinkIndex: number | null = null;

  setActiveLink(index: number) {
    this.activeLinkIndex = index;
  }

  clearActiveLink() {
    this.activeLinkIndex = null;
  }
}
