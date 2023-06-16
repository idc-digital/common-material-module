import { TestBed } from '@angular/core/testing';
import { CommonMaterialService } from './common-material.service';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

describe('CommonMaterialService', () => {
  let service: CommonMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('MaterialModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatCardModule,
        MatButtonModule,
        MatSidenavModule,
        MatSnackBarModule,
        MatDividerModule,
        MatIconModule,
        MatDialogModule,
        MatToolbarModule,
        MatRadioModule,
        MatTabsModule,
        MatCheckboxModule,
        MatMenuModule,
        MatAutocompleteModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatExpansionModule,
        MatSliderModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatButtonToggleModule,
        MatListModule,
        MatGridListModule,
        MatSlideToggleModule,
      ],
    });
  });

  it('MatInputModule', () => {
    const module = TestBed.inject(MatInputModule);
    expect(module).toBeTruthy();
  });

  it('MatSelectModule', () => {
    const module = TestBed.inject(MatSelectModule);
    expect(module).toBeTruthy();
  });

  it('MatFormFieldModule', () => {
    const module = TestBed.inject(MatFormFieldModule);
    expect(module).toBeTruthy();
  });

  it('MatCardModule', () => {
    const module = TestBed.inject(MatCardModule);
    expect(module).toBeTruthy();
  });

  it('MatButtonModule', () => {
    const module = TestBed.inject(MatButtonModule);
    expect(module).toBeTruthy();
  });

  it('MatSidenavModule', () => {
    const module = TestBed.inject(MatSidenavModule);
    expect(module).toBeTruthy();
  });

  it('MatSnackBarModule', () => {
    const module = TestBed.inject(MatSnackBarModule);
    expect(module).toBeTruthy();
  });

  it('MatDividerModule', () => {
    const module = TestBed.inject(MatDividerModule);
    expect(module).toBeTruthy();
  });

  it('MatIconModule', () => {
    const module = TestBed.inject(MatIconModule);
    expect(module).toBeTruthy();
  });

  it('MatDialogModule', () => {
    const module = TestBed.inject(MatDialogModule);
    expect(module).toBeTruthy();
  });

  it('MatToolbarModule', () => {
    const module = TestBed.inject(MatToolbarModule);
    expect(module).toBeTruthy();
  });

  it('MatRadioModule', () => {
    const module = TestBed.inject(MatRadioModule);
    expect(module).toBeTruthy();
  });

  it('MatTabsModule', () => {
    const module = TestBed.inject(MatTabsModule);
    expect(module).toBeTruthy();
  });

  it('MatCheckboxModule', () => {
    const module = TestBed.inject(MatCheckboxModule);
    expect(module).toBeTruthy();
  });

  it('MatMenuModule', () => {
    const module = TestBed.inject(MatMenuModule);
    expect(module).toBeTruthy();
  });

  it('MatAutocompleteModule', () => {
    const module = TestBed.inject(MatAutocompleteModule);
    expect(module).toBeTruthy();
  });

  it('MatButtonToggleModule', () => {
    const module = TestBed.inject(MatButtonToggleModule);
    expect(module).toBeTruthy();
  });

  it('MatListModule', () => {
    const module = TestBed.inject(MatListModule);
    expect(module).toBeTruthy();
  });

  it('MatGridListModule', () => {
    const module = TestBed.inject(MatGridListModule);
    expect(module).toBeTruthy();
  });

  it('MatSlideToggleModule', () => {
    const module = TestBed.inject(MatSlideToggleModule);
    expect(module).toBeTruthy();
  });

  





});
