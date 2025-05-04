import {
  Component,
  HostListener,
  inject,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { SliderComponent } from '../../../../Shared/components/slider/slider.component';
import { CategoryCardComponent } from '../../components/category-card/category-card.component';
import { ProductCardComponent } from '../../../../Shared/components/product-card/product-card.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home-page',
  imports: [SliderComponent, CategoryCardComponent, ProductCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  private platformId = inject(PLATFORM_ID);
  blogs = signal([
    {
      title: 'Ahmed Hamed CEO',
      image: {
        url: 'slider/how-to-operate-a-transistor-as-a-switch-fig0-new.webp',
        alt: 'Product 1',
      },
    },
    {
      title: 'Ameen Elnaggar FrontEnd Developer',
      image: {
        url: 'slider/ImageForArticle_22916_16911443322394545.webp',
        alt: 'Product 2',
      },
    },
    {
      title: 'Sayed Marcello Backend Developer',
      image: {
        url: 'slider/tinywow_ترانزستورات-NPN-بنيتها-_51923149.webp',
        alt: 'Product 3',
      },
    },
  ]);

  categories = signal([
    {
      title: 'Microcontroller Essentials',
      image: {
        url: 'slider/ImageForArticle_22916_16911443322394545.webp',
        alt: 'Microcontroller Collection',
      },
      description:
        'Explore basic to advanced microcontroller development boards.',
    },
    {
      title: 'Power Supply Modules',
      image: {
        url: 'slider/tinywow_ترانزستورات-NPN-بنيتها-_51923149.webp',
        alt: 'Power Modules',
      },
      description: 'Reliable power sources for all electronic components.',
    },
    {
      title: 'Sensor & Detection Kits',
      image: {
        url: 'slider/how-to-operate-a-transistor-as-a-switch-fig0-new.webp',
        alt: 'Sensor Collection',
      },
      description: 'Wide range of sensors for IoT and automation projects.',
    },
    {
      title: 'Soldering & Repair Tools',
      image: {
        url: 'slider/download.jpeg',
        alt: 'Tools for Soldering',
      },
      description: 'Professional tools to build and fix your circuits.',
    },
  ]);

  newProducts = signal([
    {
      title: 'ESP32 Wi-Fi Module',
      description:
        'Powerful microcontroller with integrated Wi-Fi and Bluetooth.',
      image: {
        url: 'arduino-6060050_640.jpg',
        alt: 'ESP32 Wi-Fi Module',
      },
      status: 'Sale',
      price: 50,
    },
    {
      title: 'LM2596 Power Converter',
      description:
        'Step-down voltage regulator for various power applications.',
      image: {
        url: 'arduino-6060050_640.jpg',
        alt: 'LM2596 Module',
      },
      status: '',
      price: 50,
    },
    {
      title: 'HC-SR04 Ultrasonic Sensor',
      description: 'Measure distance accurately using ultrasonic waves.',
      image: {
        url: 'arduino-6060050_640.jpg',
        alt: 'Ultrasonic Sensor',
      },
      status: 'New',
      price: 50,
    },
    {
      title: 'Raspberry Pi 4 Model B',
      description: 'Compact computer for IoT, robotics, and AI projects.',
      image: {
        url: 'arduino-6060050_640.jpg',
        alt: 'Raspberry Pi 4',
      },
      status: '',
      price: 50,
    },
    {
      title: 'Raspberry Pi 4 Model B',
      description: 'Compact computer for IoT, robotics, and AI projects.',
      image: {
        url: 'arduino-6060050_640.jpg',
        alt: 'Raspberry Pi 4',
      },
      status: '',
      price: 50,
    },
    {
      title: 'Raspberry Pi 4 Model B',
      description: 'Compact computer for IoT, robotics, and AI projects.',
      image: {
        url: 'arduino-6060050_640.jpg',
        alt: 'Raspberry Pi 4',
      },
      status: '',
      price: 50,
    },
  ]);

  brands = signal([
    {
      title: 'Arduino',
      image: {
        url: 'slider/ImageForArticle_22916_16911443322394545.webp',
        alt: 'Microcontroller Collection',
      },
    },
    {
      title: 'Raspberry Pi',
      image: {
        url: 'slider/tinywow_ترانزستورات-NPN-بنيتها-_51923149.webp',
        alt: 'Power Modules',
      },
    },
    {
      title: 'SparkFun',
      image: {
        url: 'slider/how-to-operate-a-transistor-as-a-switch-fig0-new.webp',
        alt: 'Sensor Collection',
      },
    },
    {
      title: 'Adafruit',
      image: {
        url: 'slider/download.jpeg',
        alt: 'Tools for Soldering',
      },
    },
    {
      title: 'Texas Instruments',
      image: {
        url: 'slider/ImageForArticle_22916_16911443322394545.webp',
        alt: 'Microcontroller Collection',
      },
    },
    {
      title: 'Seeed Studio',
      image: {
        url: 'slider/how-to-operate-a-transistor-as-a-switch-fig0-new.webp',
        alt: 'Sensor Collection',
      },
    },
    {
      title: 'STMicroelectronics',
      image: {
        url: 'slider/ImageForArticle_22916_16911443322394545.webp',
        alt: 'Microcontroller Collection',
      },
    },
  ]);

  blogs2 = signal([
    {
      description: 'Getting started with Arduino programming.',
      image: {
        url: 'slider/ImageForArticle_22916_16911443322394545.webp',
        alt: 'Microcontroller Collection',
      },
    },
    {
      description: 'Top Raspberry Pi home projects today.',
      image: {
        url: 'slider/tinywow_ترانزستورات-NPN-بنيتها-_51923149.webp',
        alt: 'Power Modules',
      },
    },
    {
      description: 'SparkFun modules you should try now.',
      image: {
        url: 'slider/how-to-operate-a-transistor-as-a-switch-fig0-new.webp',
        alt: 'Sensor Collection',
      },
    },
    {
      description: 'Best Adafruit kits for beginners today.',
      image: {
        url: 'slider/download.jpeg',
        alt: 'Tools for Soldering',
      },
    },
    {
      description: 'Texas Instruments for circuit designers only.',
      image: {
        url: 'slider/ImageForArticle_22916_16911443322394545.webp',
        alt: 'Microcontroller Collection',
      },
    },
    {
      description: 'Seeed Studio projects for IoT starters.',
      image: {
        url: 'slider/how-to-operate-a-transistor-as-a-switch-fig0-new.webp',
        alt: 'Sensor Collection',
      },
    },
    {
      description: 'STMicroelectronics tools for embedded systems.',
      image: {
        url: 'slider/ImageForArticle_22916_16911443322394545.webp',
        alt: 'Microcontroller Collection',
      },
    },
  ]);

  responsive = signal<boolean>(false);

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkIfMobile();
    }
  }

  @HostListener('window:resize')
  checkIfMobile() {
    this.responsive.set(window.innerWidth <= 1530);
  }
}
