import { Component } from '@angular/core';

@Component({
  selector: 'app-onboarding-steps',
  templateUrl: './onboarding-steps.component.html',
  styleUrls: ['./onboarding-steps.component.scss']
})
export class OnboardingStepsComponent {
  currentStep = 1;

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
