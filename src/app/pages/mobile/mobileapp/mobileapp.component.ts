import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { ApiService } from 'src/app/shared/api/api.service';

@Component({
  selector: 'app-mobileapp',
  templateUrl: './mobileapp.component.html',
  styleUrls: ['./mobileapp.component.css']
})
export class MobileappComponent implements OnInit {

  list1 = ["Upgrade your engineering capacity", "Employ global development work standards.", "Utilize cutting-edge technologies and tools", "Maintains transparency throughout the project."]
  list2 = ["Cut additional costs", "Increase the speed of delivery", "Access expertise that is not available in-house", "Solely focus on your business objectives"]

  aiService = [
    {
      num: "01.",
      title: "Bring Together the Right People in Team",
      desc: "That has very much been the secret of our consistent success over the years. Below are a few steps of the process that we follow."
    },

    {
      num: "02.",
      title: "Efficient Sprint Planning",
      desc: "We plan an efficient sprint roadmap for team members to collaborate effectively."
    },

    {
      num: "03.",
      title: "Code Tech Architecture",
      desc: "We decouple the codes which enable our team to work faster and independently."
    },

    {
      num: "04.",
      title: "Iterative Delivery Approach",
      desc: "We break the implementation process into smaller pieces to deliver value incrementally."
    },

    {
      num: "05.",
      title: "Code Reviews",
      desc: "We identify issues like file leaks, memory leaks, and performance signs with code reviews."
    },

    {
      num: "06.",
      title: "Standups and Demos",
      desc: "Weekly reviews, demos, and standups ensure coordination among team members and the client."
    },

  ]

  projects!: any[]

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    AOS.init({
      duration: 2000,
    })

    this.fetchProjects()
  }

  fetchProjects() {
    this.api.getProjects()
      .subscribe((res: any) => {
        this.projects = res.projects
        console.log(this.projects)
      })
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
