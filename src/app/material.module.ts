import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
// Import other Angular Material modules you need
import { MatGridListModule } from '@angular/material/grid-list'; // Import MatGridListModule

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    // Add other Angular Material modules here
    MatGridListModule,
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    // Export other Angular Material modules here
  ],
})
export class MaterialModule {}
