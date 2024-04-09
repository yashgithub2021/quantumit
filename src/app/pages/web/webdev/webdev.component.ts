import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-webdev',
  templateUrl: './webdev.component.html',
  styleUrls: ['./webdev.component.css']
})
export class WebdevComponent implements OnInit {

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    })
  }

  our_steps = [
    {
      stepNo: "Step 01",
      title: "Discover a World Of Possibilities",
      desc: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location"
    },
    {
      stepNo: "Step 02",
      title: "Narrowing Down Your Choices",
      desc: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision."
    },
    {
      stepNo: "Step 03",
      title: "Personalized Guidance",
      desc: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away."
    }
  ]
  our_steps2 = [
    {
      stepNo: "Step 04",
      title: "See It for Yourself",
      desc: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home."
    },
    {
      stepNo: "Step 05",
      title: "Making Informed Decisions",
      desc: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed."
    },
  ]
}
