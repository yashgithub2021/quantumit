import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AccountPayable, AccountReceivableRecovery, ClinicalDocumentProcessing, GenerativeAiConsultingCompany, GenerativeAiDevelopment, GenerativeAiIntegrationServices, HREmployeeOnBoarding, HRRecruitment, HireGenerativeAiEngineers, InsuranceClaimProcessing, InsuranceEligibilityVerification, PurchaseOrder, androidService, contentMarketingServices, conversionRateOptimizationServices, crossPlatformAppDevelopment, dotNetDevelopmentServices, emailMarketingServices, iOsService, iPadAppDevelopment, internetOfThings, joomlaDevelopmentServices, mobileDevServices, mobileGameDevelopment, nodejsDevelopmentServices, paidSearchAdvertisingServices, payPerClickServices, phpDevelopmentServices, roboticProcessAutomation, rubyOnRailsDevelopmentServices, seoServices, serviceAiDevelopment, socialMediaServices, swiftAppDevelopment, websiteDevServices } from '../shared/service-data';

@Injectable({
  providedIn: 'root'
})
export class DataService implements Resolve<any> {

  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    if (id === 'android-application-development-company') {
      return of({ title: 'Android App', services: androidService });
    } else if (id === 'iphone-application-development-company') {
      return of({ title: 'iOS App', services: iOsService });
    } else if (id === 'swift-application-development-company') {
      return of({ title: 'swift App', services: swiftAppDevelopment });
    } else if (id === 'cross-platform-mobile-app-development') {
      return of({ title: 'cross Platfom App', services: crossPlatformAppDevelopment });
    } else if (id === 'ipad-app-development-company') {
      return of({ title: 'iPad App', services: iPadAppDevelopment });
    } else if (id === 'mobile-game-development-company') {
      return of({ title: 'mobileGame App', services: mobileGameDevelopment });
    } else if (id === 'internet-of-things') {
      return of({ title: 'internet of things', services: internetOfThings });
    } else if (id === 'robotic-process-automation') {
      return of({ title: 'RAP', services: roboticProcessAutomation });
    } else if (id === 'seo-services-company') {
      return of({ title: 'seo Services', services: seoServices });
    } else if (id === 'ppc-campaign-management-services') {
      return of({ title: 'payPerClick Services', services: payPerClickServices });
    } else if (id === 'social-media-marketing') {
      return of({ title: 'socialMedia Services', services: socialMediaServices });
    } else if (id === 'emailMarketing') {
      return of({ title: 'emailMarketing Services', services: emailMarketingServices });
    } else if (id === 'conversionRateOptimization') {
      return of({ title: 'conversionRateOptimization Services', services: conversionRateOptimizationServices });
    } else if (id === 'paidSearch') {
      return of({ title: 'paidSearch Services', services: paidSearchAdvertisingServices });
    } else if (id === 'contentMarketing') {
      return of({ title: 'contentMarketing Services', services: contentMarketingServices });
    } else if (id === 'websiteDev') {
      return of({ title: 'websiteDev Services', services: websiteDevServices });
    } else if (id === 'mobileDev') {
      return of({ title: 'mobileDev Services', services: mobileDevServices });
    } else if (id === 'php-development-company') {
      return of({ title: 'php Services', services: phpDevelopmentServices });
    } else if (id === 'dotnet-development-company') {
      return of({ title: 'dotnet Services', services: dotNetDevelopmentServices });
    } else if (id === 'ruby-on-rails-development-company') {
      return of({ title: 'ror Services', services: rubyOnRailsDevelopmentServices });
    } else if (id === 'node-js-development') {
      return of({ title: 'node Services', services: nodejsDevelopmentServices });
    } else if (id === 'joomla-development-company') {
      return of({ title: 'joomla Services', services: joomlaDevelopmentServices });
    }
    //for ai generative services
    else if (id === 'Generative-Ai-Development') {
      return of({ title: 'Generative Ai Development', services: GenerativeAiDevelopment });
    }else if (id === 'Generative-Ai-Integration-Services') {
      return of({ title: 'Generative Ai Integration Services', services: GenerativeAiIntegrationServices });
    }else if (id === 'Generative-Ai-consulting-company') {
      return of({ title: 'Generative Ai consulting company', services: GenerativeAiConsultingCompany });
    }else if (id === 'hire-generative-ai-engineers') {
      return of({ title: 'hire generative ai engineers', services: HireGenerativeAiEngineers });
    }else if (id === 'Ai-Agent-Development') {
      return of({ title: 'Ai Agent Development', services: joomlaDevelopmentServices });
    }else if (id === 'Ai-Copilot-Development') {
      return of({ title: 'Ai Copilot Development', services: joomlaDevelopmentServices });
    }else if (id === 'Hire-Prompt-Engineers') {
      return of({ title: 'Hire Prompt Engineers', services: joomlaDevelopmentServices });
    }else if (id === 'Adaptive-Ai-Development-Co.') {
      return of({ title: 'Adaptive Ai Development Co.', services: joomlaDevelopmentServices });
    }else if (id === 'ChatGPT-Developers') {
      return of({ title: 'ChatGPT Developers', services: joomlaDevelopmentServices });
    }else if (id === 'Stable-Diffusion-Developers') {
      return of({ title: 'Stable Diffusion Developers', services: joomlaDevelopmentServices });
    }else if (id === 'ChatGPT-Integration-Service') {
      return of({ title: 'ChatGPT Integration Service', services: joomlaDevelopmentServices });
    }else if (id === 'Large-Language-Model') {
      return of({ title: 'Large Language Model', services: joomlaDevelopmentServices });
    }
    //for ai service
    else if (id === 'Ai-Development') {
      return of({ title: 'Ai Development', services: serviceAiDevelopment });
    }else if (id === 'Ai-Consulting') {
      return of({ title: 'Ai Consulting', services: joomlaDevelopmentServices });
    }else if (id === 'Ai-As-A-Service') {
      return of({ title: 'Ai As A Service', services: joomlaDevelopmentServices });
    }else if (id === 'Hire-Action-Transformer-Developer') {
      return of({ title: 'Hire Action Transformer Developer', services: joomlaDevelopmentServices });
    }else if (id === 'Ai-Agent-Development') {
      return of({ title: 'Ai Agent Development', services: joomlaDevelopmentServices });
    } else if (id === 'MLOps-Consulting-service') {
      return of({ title: 'MLOps Consulting service', services: joomlaDevelopmentServices });
    }else if (id === 'Enterprise-Ai-Development') {
      return of({ title: 'Enterprise Ai Development', services: joomlaDevelopmentServices });
    }else if (id === 'Ai-Chatbot-Development-Co') {
      return of({ title: 'Ai Chatbot Development Co', services: joomlaDevelopmentServices });
    } 
    // ai case study page
    else if(id === 'HR-Employee-On-Boarding'){
      return of({ title: 'HR Employee On Boarding', services: HREmployeeOnBoarding });

    }else if(id === 'HR-Recruitment'){
      return of({ title: 'HR Recruitment', services: HRRecruitment });

    }else if(id === 'Purchase-Order'){
      return of({ title: 'Purchase Order', services: PurchaseOrder });

    }else if(id === 'Account-Payable'){
      return of({ title: 'Account Payable', services: AccountPayable });

    }else if(id === 'Account-Receivable-Recovery'){
      return of({ title: 'Account Receivable Recovery', services: AccountReceivableRecovery });

    }else if(id === 'Insurance-Claim-Processing'){
      return of({ title: 'Insurance Claim Processing', services: InsuranceClaimProcessing });

    }else if(id === 'Insurance-Eligibility-Verification'){
      return of({ title: 'Insurance Eligibility Verification', services: InsuranceEligibilityVerification });

    }else if(id === 'Clinical-Document-Processing'){
      return of({ title: 'Clinical Document Processin', services: ClinicalDocumentProcessing });

    }
    
    else {
      return of(null); // Return null for unknown IDs
    }
  }
}
