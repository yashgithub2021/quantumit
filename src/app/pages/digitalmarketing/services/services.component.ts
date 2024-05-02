import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  isDarkTheme!: boolean
  serviceDetails: any
  constructor(private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isDarkTheme = this.api.isDarkTheme();
    this.themechange()
    this.route.data.subscribe((data: any) => {
      console.log(data.services.services)
      this.serviceDetails = data.services.services
    });
    // this.serviceDetails = {
    //   serviceTitle: "search engine optimization",
    //   title1: "Boost your organic ranking with top-tier SEO services",
    //   descriptionOne: [
    //     "Transform your online presence and achieve higher organic rankings with our comprehensive suite of SEO services, meticulously crafted to meet the unique demands of the USA, UK and Indian market.",
    //     "Our expert team utilizes cutting-edge strategies and industry best practices to optimize your website, enhance visibility, and drive targeted traffic, ensuring sustainable growth and success in the competitive digital landscape."
    //   ],
    //   title2: "In search of a results-driven leading SEO company?",
    //   descriptionTwo: [
    //     "SEO is crucial for businesses aiming to enhance their online visibility and attract targeted traffic. By optimizing website content, structure, and performance, SEO improves search engine rankings, making it easier for potential customers to find your business.",
    //     "Higher visibility leads to increased website traffic, which can result in more leads, conversions, and revenue. Additionally, SEO helps build credibility and trust with users, as websites that appear at the top of search results are often perceived as more authoritative and reliable. In today's competitive digital landscape, investing in SEO is essential for staying ahead of the competition and achieving long-term success.",
    //     "Are you searching for a top-tier SEO company that delivers tangible results? Look no further. Our team specializes in driving real, measurable outcomes through strategic search engine optimization tactics. With a proven track record of success, we combine innovative strategies, industry expertise, and data-driven approaches to elevate your online presence and propel your business to new heights. Partner with Quantum IT and experience the difference of working with a results-oriented SEO leader."
    //   ],
    //   service: "Our SEO Solutions",
    //   steps: [
    //     {
    //       num: 1,
    //       title: "Off-Page SEO",
    //       desc: "Off-page SEO builds website authority with tactics like backlinks and social media engagement"
    //     },
    //     {
    //       num: 2,
    //       title: "E-Commerce SEO",
    //       desc: "E-Commerce SEO boosts online store visibility and sales through tailored optimization strategies."
    //     },
    //     {
    //       num: 3,
    //       title: "Enterprise SEO",
    //       desc: "Enterprise SEO optimizes large-scale websites for maximum visibility and impact."
    //     }
    //   ],
    //   ourApproach: [
    //     {
    //       title: "Understand Objectives",
    //       desc: "We begin by comprehensively understanding your business objectives, target audience, and unique requirements to tailor our strategies accordingly.",
    //       img: "../../../../assets/dm/services/obj.svg"
    //     },
    //     {
    //       title: "Keyword Research",
    //       desc: "Our meticulous keyword research ensures that we target the most relevant and high-value keywords to drive organic traffic and improve search engine rankings",
    //       img: "../../../../assets/dm/services/key.svg"
    //     },
    //     {
    //       title: "Understanding Competitors",
    //       desc: "By analyzing competitors' strategies and performance, we gain valuable insights to refine our approach and stay ahead in the digital landscape.",
    //       img: "../../../../assets/dm/services/comp.svg"
    //     },
    //     {
    //       title: "Web Design & Development",
    //       desc: "Our expert team combines cutting-edge design principles with advanced development techniques to create visually stunning and user-friendly websites that effectively engage your audience and drive conversions.",
    //       img: "../../../../assets/dm/services/web.svg"
    //     },
    //     {
    //       title: "Understand Objectives",
    //       desc: "We begin by comprehensively understanding your business objectives, target audience, and unique requirements to tailor our strategies accordingly.",
    //       img: "../../../../assets/dm/services/key.svg"
    //     },
    //   ]
    // }
  }

  themechange() {
    this.api.themeChanged.subscribe((isDarkTheme: boolean) => {
      this.isDarkTheme = isDarkTheme;
    });
  }
}
